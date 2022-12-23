import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSumary from "./ExpensesSummary";


function ExpensesOutput ({expenses, expensesPeriod}) {
    return <View>
        <ExpensesSumary expenses={expenses} periodName={expensesPeriod} />
        <ExpensesList />
    </View>;
}

export default ExpensesOutput;