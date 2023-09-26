function Factorial (n)
{
 const primo =[];

  for(let x=2; n>1; x++)
  {
    while(n%x===0)
    {
        primo.push(x);
        n/=x;
    }
  }
  
  return primo;
}
export default Factorial;