 export default function Colors({items}) {

    let colorArry = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF'];

    return(
        <div>
               <ul>
               {items.map((item, index) =>(
                    <li key={index} style={{color: colorArry[index % colorArry.length] }}>
                        {item}
                    </li>       
                ))}
               </ul>
        </div>
    )
 }