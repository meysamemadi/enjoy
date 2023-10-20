
import { useParams } from "next/navigation";

const useDirection = () => {
     const params = useParams();
     const lang = params.lang;
     let right = false;

     if (lang === "ar") {
       right = true;
     }

     return right;
}

export default useDirection;