import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  const income = useSelector((store) => store.Expense.income);
  const expenseList = useSelector((store) => store.Expense.expenseList);
  const totalExpense = expenseList.reduce((accumulater, expsense) => {
    return Number.parseFloat(accumulater) + Number.parseFloat(expsense.price);
  }, 0);
  const remaningMoney = income - totalExpense;
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpense} $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{remaningMoney} $</div>
      </div>
    </div>
  );
}
