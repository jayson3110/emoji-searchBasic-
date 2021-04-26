import {useEffect} from 'react';
import Item from './Item.js';
import {v4 as uuidv4} from 'uuid';
import Clipboard from "clipboard";
import './Results.css';


function  Results(props) {
	// body...

	useEffect(()=> {
		const clipboard = new Clipboard(".item");
		return () =>{
			clipboard.destroy();

		};
	})

	return(
 
          <div className="results">
             {props.emojiFiltered.slice(0,100).map((emoji) => (
        <Item id={uuidv4()} symbol={emoji.symbol} title={emoji.title} keywords={emoji.keywords} key={uuidv4()}/>
			))}

          </div>

	)

}


export default Results
