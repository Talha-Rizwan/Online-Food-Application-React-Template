import My_cart from "../My_cart";
import data from "../data";

function Menu_item(props){

    function add_cart(){
        let new_data= {item: props.name, quantity: '1', price: props.price}

        data.push({item : props.name, quantity:"1",price : props.price}); 

        console.log(data);

        <My_cart name={props.name} />




    }




return <div>
    <article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={props.path} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{props.name}</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 1, 2020</span>
						<span>PKR {props.price}/-</span>
					</div>
				</div>
                <button onClick={add_cart} className="border-solid border-2 border-black hover:bg-red-200">Add to Cart</button>
			</article>
</div>
}

export default Menu_item;