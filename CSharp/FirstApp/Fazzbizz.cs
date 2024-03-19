using System;

class Fazzbizz
{
    static int fazzbizz(int a, int b)
    {
        if (b < a)
            Console.WriteLine("Le deuxième nombre ne doit pas être inférieur au premier");
        for (int c = a; c <= b; c++){
            if (c % 9 == 0 && c % 10 == 0)
                Console.WriteLine("Fazzbizz");
            if (c % 9 == 0 && c % 10 != 0)
                Console.WriteLine("Fazz");
            if (c % 9 != 0 && c % 10 == 0)
                Console.WriteLine("Bizz");
            if (c % 9 != 0 && c % 10 != 0)
                Console.WriteLine(c);
        }
        return 0;
    }
    static int ConvertNumberToString(int a)
    {
        int a;
    }
    static void Main(string[] args)
    {
        if (args.Length == 2)
        {
            int a = int.Parse(args[0]);
            int b = int.Parse(args[1]);
            Fazzbizz.fazzbizz(a, b);
        }
        else
            Console.WriteLine("Veuillez fournir deux nombres en argument.");
    }
}
