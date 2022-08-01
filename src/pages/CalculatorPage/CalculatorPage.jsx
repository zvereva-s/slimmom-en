import CalculatorForm from "modules/Calculator/CalculatorForm";

function CalculatorPage() {
    return (
        <main>
            <div className="container">
                <h1>Calculate your daily calorie intake right now</h1>
                <CalculatorForm />
            </div>
        </main>
    )
 };
export default CalculatorPage;