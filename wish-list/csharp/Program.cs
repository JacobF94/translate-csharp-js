using System;
using System.Collections.Generic;

List<string> WishList = new List<string>()
{
    "Wish number 1",
    "Wish number 2",
    "Wish number 3"
};

foreach (string wish in WishList)
{
    Console.WriteLine($"{wish}");
}