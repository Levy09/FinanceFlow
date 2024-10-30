export default function FinancialInfo({ title, value, bgColor }) {
    return (
        <div
            className= {`${bgColor} min-w-[300px] rounded-md shadow-md flex flex-col justify-center items-center p-4`}
        >
            <h1 className="text-3xl font-bold">{title}</h1> 
            <h1 className="text-3xl font-bold">{value}</h1> 
        </div>
    );}