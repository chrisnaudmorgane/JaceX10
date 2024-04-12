#!/usr/bin/env python3

import sys
import csv
import bisect
from math import fabs

def read_data(filename):
    data = []
    with open(filename, 'r') as file:
        reader = csv.reader(file, delimiter=';')
        for row in reader:
            data.append((float(row[0]), float(row[1])))
    return data

def calculate_derivative(data):
    derivatives = []
    for i in range(1, len(data) - 1):
        vol1, ph1 = data[i - 1]
        vol2, ph2 = data[i]
        vol3, ph3 = data[i + 1]
        dvol1 = vol2 - vol1
        dvol2 = vol3 - vol2
        dph1 = ph2 - ph1
        dph2 = ph3 - ph2
        coeff1 = dvol2 / (dvol1 + dvol2)
        coeff2 = dvol1 / (dvol1 + dvol2)
        derivative = coeff1 * dph1 / dvol1 + coeff2 * dph2 / dvol2
        derivatives.append((vol2, derivative))
    return derivatives

def find_closest_equiv_point(data, derivatives):
        max_derivative = max(derivatives, key=lambda x: x[1])
        closest_point = min(data, key=lambda x: fabs(x[0] - max_derivative[0]))
        return closest_point

def calculate_second_derivative(data, derivatives):
    second_derivatives = []
    for i in range(1, len(derivatives) - 1):
        vol1, der1 = derivatives[i - 1]
        vol2, der2 = derivatives[i]
        vol3, der3 = derivatives[i + 1]
        dvol1 = vol2 - vol1
        dvol2 = vol3 - vol2
        dder1 = der2 - der1
        dder2 = der3 - der2
        coeff1 = dvol2 / (dvol1 + dvol2)
        coeff2 = dvol1 / (dvol1 + dvol2)
        second_derivative = coeff1 * dder1 / dvol1 + coeff2 * dder2 / dvol2
        second_derivatives.append((vol2, second_derivative))
    return second_derivatives

def interpolate_second_derivative(data, derivatives, second_derivatives, closest_point):
    vol_closest, _ = closest_point
    interp_points = []
    for vol in [vol_closest + i * 0.1 for i in range(-5, 6)]:
        idx = bisect.bisect_left(data, (vol, 0))
        if idx == 0:
            der = derivatives[0][1]
            der2 = second_derivatives[0][1]
        elif idx == len(data):
            der = derivatives[-1][1]
            der2 = second_derivatives[-1][1]
        else:
            vol1, ph1 = data[idx - 1]
            vol2, ph2 = data[idx]
            der1 = derivatives[idx - 1][1]
            der2 = derivatives[idx][1]
            der21 = second_derivatives[idx - 1][1]
            der22 = second_derivatives[idx][1]
            der = der1 + (der2 - der1) * (vol - vol1) / (vol2 - vol1)
            der2 = der21 + (der22 - der21) * (vol - vol1) / (vol2 - vol1)
        interp_points.append((vol, der2))
    return interp_points

def find_equiv_point(interp_points):
    min_second_der = min(interp_points, key=lambda x: fabs(x[1]))
    return min_second_der[0]

def main():
    if len(sys.argv) != 2:
        print("USAGE: python 109titration.py file")
        sys.exit(1)

    filename = sys.argv[1]
    data = read_data(filename)
    derivatives = calculate_derivative(data)
    print("Derivative:")
    for vol, der in derivatives:
        print(f"{vol:.1f} ml -> {der:.2f}")

    closest_point = find_closest_equiv_point(data, derivatives)
    print(f"\nEquivalence point at {closest_point[0]:.1f} ml")

    second_derivatives = calculate_second_derivative(data, derivatives)
    print("\nSecond derivative:")
    for vol, der2 in second_derivatives:
        print(f"{vol:.1f} ml -> {der2:.2f}")

    interp_points = interpolate_second_derivative(data, derivatives, second_derivatives, closest_point)
    print("\nSecond derivative estimated:")
    for vol, der2 in interp_points:
        print(f"{vol:.1f} ml -> {der2:.2f}")

    equiv_point = find_equiv_point(interp_points)
    print(f"\nEquivalence point at {equiv_point:.1f} ml")

if __name__ == "__main__":
    main()