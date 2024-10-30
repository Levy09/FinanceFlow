import SideBar from "../components/sideBar/SideBar.jsx";
import FinancialInfo from "../components/financialInfor/Financialinfor.jsx";
import Forms from "../components/Forms/Forms.jsx";




export default function dashboard() {
    return (
        <div className="flex h-screen overflow-hidden">
            <SideBar />

            <main className="  gap-5 flex-1 pl-24">

                {/* Cabeçalho */}
                <header className=" bg-[#ffffff] w-full h-20 flex items-center justify-between px-6">
                    <div className="flex items-center space-x-3">
                        <span className="text-gray-700 text-2xl">💼</span> {/* Ícone neutro */}
                        <h1 className="text-gray-800 text-2xl font-medium">Controle Financeiro</h1>
                    </div>
                    <p className="text-white bg-green-600 text-sm">Gerencie suas finanças</p>
                </header>





                {/* Informações financeiras compactas */}
                <div className=" items-center flex gap-4 justify-center p-4 bg-white w-full rounded-s-md ">
                   <div className=" shadow-md  flex  items-center transition-transform duration-300 hover:scale-105">
                    <FinancialInfo title="Entradas" value="R$ 5,000" bgColor="bg-green-100" />
                    </div> 
                    <img src="/minus.svg"   className="w-8 h-8" />
                    <div className=" shadow-md  flex  items-center transition-transform duration-300 hover:scale-105" ><FinancialInfo title="Despesas" value="R$ 5,000" bgColor="bg-red-100" /></div>
                    <img src="/equals.svg"  className="w-8 h-8"/>
                    <div className=" shadow-md flex  items-center transition-transform duration-300 hover:scale-105"><FinancialInfo title="total" value="R$ 0,00" bgColor="bg-blue-100" /></div>
                </div>

               
                
          <div className=" m-10  flex  p-4">
          
           <Forms/>
           
           
          </div>
           
                



            </main>
         
        </div>
    );
}