 import Data from "./data.json"
import  Card from "./components/Card";

function App( ) {
  return (
    <div  >
      {Data.map((card_details)=>(
        <Card key={card_details.id} {...card_details} />

      ))}
    </div>
  );
}

export default App;
