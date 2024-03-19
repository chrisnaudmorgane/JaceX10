import sys

def correct_indentation(input_file, output_file):
    with open(input_file, 'r') as file:
        lines = file.readlines()

    corrected_lines = []
    current_indentation = 0

    for line in lines:
        trimmed_line = line.strip()

        if trimmed_line.startswith('}'):
            current_indentation -= 1

        corrected_lines.append('    ' * current_indentation + trimmed_line + '\n')

        if trimmed_line.endswith('{'):
            current_indentation += 1

    with open(output_file, 'w') as file:
        file.writelines(corrected_lines)

def process_files(input_files):
    for input_file in input_files:
        # Assume output files will have the same name with '_corrected' appended
        output_file = input_file.replace('.c', '_corrected.c')
        correct_indentation(input_file, output_file)
        print(f"Indentation corrected for {input_file}. Corrected content saved to {output_file}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python script.py file1.c file2.c ...")
        sys.exit(1)

    input_files = sys.argv[1:]
    process_files(input_files)
