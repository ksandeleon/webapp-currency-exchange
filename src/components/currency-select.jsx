const CurrencySelect = () => {
  return (
    <div className="currency-select">
        <img src="https://flagsapi.com/US/flat/64.png" alt="currrency country flag " />
        <select className="currency-dropdown">
            <option value="USD" selected>USD</option>
            <option value="INR">INR</option>
            <option value="NPR">NPR</option>
        </select>
    </div>
  )
}

export default CurrencySelect
