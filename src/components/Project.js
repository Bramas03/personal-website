import ReadMoreReadLess from "./ReadMore";
export default function Project(props) {
    const longText = props.text
    return (
        <div className="w-1/3 h-96 bg-[#272b33] rounded-md flex">
    <div className="w-1/2 p-4 flex flex-col justify-center">
        <h2 className="font-bold text-2xl">{props.title}</h2>
        <ReadMoreReadLess text={longText} />
        <div className="h-1/4 py-4">
        </div>
    </div>
    <img 
        className="w-1/2 h-full object-cover rounded-r-md" 
        alt={props.alt} 
        src={props.img}
    />
</div>

    );
}
