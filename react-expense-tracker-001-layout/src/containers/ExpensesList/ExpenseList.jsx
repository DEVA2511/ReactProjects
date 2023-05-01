import { List } from "components/List/List";
import { useSelector } from "react-redux";

export function ExpenseList() {
  const expenseList = useSelector((store) => store.Expense.expenseList);
  return <List items={expenseList} />;
}
