let note = Number (prompt('Quel note voulez-vous attribuer?',''));
if (note >= 0 && note <= 3)
{
    alert("Nul");
}
if (note >= 4 && note < 6)
{
    alert("Moyen");
}
if (note >= 6 && note < 8)
{
    alert("Assez bien");
}
if (note >= 8 && note <= 9)
{
    alert("Bien");
}
if (note == 10)
{
    alert("Excellent");
}