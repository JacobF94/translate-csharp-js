using System;
using System.Collections.Generic;

Main();
void Main()
{
    List<string> Insults = new List<string>()
    {
        "Insult one",
        "insult two",
        "insult three",
        "insult four",
        "insult five"
    };

    List<int> RandomIndexes = new List<int>();
    Random r = new Random();
    List<int> RandomNumbers = new List<int>();
    while (RandomNumbers.Count < 3)
    {
        int RandomIndex = r.Next(1, 5);
        if (!RandomNumbers.Contains(RandomIndex))
        {
            RandomNumbers.Add(RandomIndex);
        }
    }
    foreach (int index in RandomNumbers)
    {
        Console.WriteLine($"{Insults[index]}");
    }



};