import { View, Text } from "react-native";

function ExpensesSumary({expenses,periodName}) {

    const expensesSum = expenses.reduce((sum, expense)=>{
        return sum + expense.amout
    }, 0); // reduce helps combine values in array as a single value
    return (
        <View>
            <Text>{periodName}</Text>
            <Text>${expensesSum.toFixed(2)}</Text>
        </View>
    )

}
export default ExpensesSumary;