export default{
    formatCurrency: function(number){
        return 'R$ ' + Number(number.toFixed(2)).toLocaleString() + '';
    }
}