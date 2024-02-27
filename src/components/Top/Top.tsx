
import "./Top.css";


export default function Top(props: any) {
  return (
    <div className="items-center justify-center mt-3 flex my-2 w-11/12 h-20">
      

      
    
      <div className="outer-circle ml-6">
      <div className="inner-circle inner-circle-1"></div>
      <div className="inner-circle inner-circle-2"></div>
    </div>
    
      
      <img src="https://fontmeme.com/permalink/240227/90d6e73e9572455265e8a2ac57198737.png" alt="pokemon-font" className="mx-auto mr-7" />

      
      <div className="pokeball ml-4">
        <div className="half-ball top-half"></div>
        <div className="black-bar"></div>
        <div className="center-circle center-circle-outer">
            <div className="center-circle center-circle-inner"></div>
        </div>
        <div className="half-ball bottom-half"></div>
    </div>
    


   


    </div>
  );
}

