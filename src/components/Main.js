import sofa from '../assets/sofa.svg';
import btn from '../assets/btn.svg';
import exit from '../assets/exit.png';
import sofavideo from '../assets/sofavideo.gif';


export function Main(){
    function toggle() {
        document.documentElement.classList.toggle('animated')
    }

    return (
        <div id='product-image'>   
             <button id='btn-360' onClick={toggle}>
                <img src={btn} alt=''/>
            </button>
            <button id='btn-close'  onClick={toggle}>
                <img src={exit} alt=''/>
            </button>

            <img id='static'  src={sofa} alt=''/>
            <img id='animated' className='sofa'  src={sofavideo} alt=''/>
        </div>
    )
}