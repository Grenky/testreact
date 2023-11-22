import Good from "./Good";
import Bad from "./Bad";

export default function ConditionalR() {

    let showMessage = true;

    if(showMessage) {
        return <Good />
    } else {
        return <Bad />
    }

}