import React from 'react';
import logo from "./logo.svg";
import './menu.css';
function Menu() {
  return (
    <>
      <div className="all">
        <div className="logo">
        </div>

        <table>

<tr>
<td>
Name
</td>
<td>Amount</td>
<td>Price</td>
</tr>
<tr>
<td>Bruschetta</td>
<td>1 (Small/Medium/Large)</td>
<td>5.00$/7.00$/9.00$</td>
</tr>
<tr>
<td>Chicken Wings
</td>
<td>1 (Small/Medium/Large)</td>
<td>6.99$/10.99$/11.99$</td>
</tr>
<tr>
<td>Onion Rings</td>
<td>1 (Small/Medium/Large)</td>
<td>5.99$/7.99$/8.99$</td>
</tr>
<tr>
<td>Nachos with Cheese and Salsa
</td>
<td>1 (Small/Medium/Large)</td>
<td>8.99$/10.99$/11.99$</td>
</tr>


</table>
<h2 className='ah2'>Salads</h2>
<table>
<tr>
<td>Name</td>
<td>Amount</td>
    <td>Price</td>
</tr>
<tr>
<td>Caesar Salad</td>
<td>1 (Small/Medium/Large)</td>
<td>8.99$/10.99$/12.99</td>
</tr>

<tr>
<td>Cobb Salad</td>
<td>1 (Small/Medium/Large)</td>
<td>9.99$/11.99$/13.99</td>
</tr>
<tr>
<td>Greek Salad</td>
<td>1 (Small/Medium/Large)</td>
    <td>8.99$/10.99$/12.99</td>
</tr>
<tr>
    <td>Caprese Salad</td>
    <td>1 (Small/Medium/Large)</td>
        <td>8.99$/12.99$/13.99</td>
    </tr>





</table>
<h2 className='ah2'>
Burgers and Sandwiches
</h2>
<table>
<tr>
    <td>Name</td>
    <td>Amount</td>
                <td>Price</td>
            </tr>
<tr>
<td>Classic Cheeseburger</td>
<td>1 (Small/Medium/Large)</td>
<td>9.99$/12.99$/14.99$</td>
</tr>
<tr>
<td>BBQ Bacon Burger</td>
<td>1 (Small/Medium/Large)</td>
<td>12.99$/14.99$/15.99$</td>
</tr>

<tr>
<td>Grilled Chicken Sandwich</td>
<td>1 (Small/Medium/Large)</td>
    <td>10.99$/12.99$/14.99$</td>
</tr>

<tr>
    <td>BLT Sandwich</td>
    <td>1 (Small/Medium/Large)</td>
        <td>6.99$/8.99$/11.99$</td>
    </tr>
    <tr>
        <td>Veggie Burger</td>
        <td>1 (Small/Medium/Large)</td>
            <td>10.99$/11.99$/14.99$</td>
        </tr>
        <tr>
            <td>Turkey Club Sandwich</td>
            <td>1 (Small/Medium/Large)</td>
                <td>11.99$/13.99$/14.99$</td>
            </tr>
        </table>
         <h2 className='ah2'>Beverages</h2>                               
   
   <table>
    <tr>
        <td>Name</td>
        <td>Amount</td>
                    <td>Price</td>
                </tr>
 <tr>
<td>Soft Drinks</td>
<td>1 (Small/Medium/Large)</td>
  <td>1.99$/2.99$/3.99$</td>  
 </tr>
 <tr>
    <td>Iced Tea</td>
    <td>1 (Small/Medium/Large)</td>
              <td>2.99$/3.99$/4.99$</td>  
             </tr>
             <tr>
                <td>Coffee</td>
                <td>1 (Small/Medium/Large)</td>
                          <td>2.99$/3.99$/4.99$</td>  
                         </tr>
                         <tr>
                            <td>Smoothies</td>
                            <td>1 (Small/Medium/Large)</td>
                                      <td>4.99$/6.99$/8.99$</td>  
                          </tr>

   </table>
   
      </div>
    </>
  );
}

export default Menu;
