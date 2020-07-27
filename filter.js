//1 - Populate Select 2

const s1 = document.querySelector("#select-1");
const s2 = document.querySelector("#select-2");
const selected = document.querySelector('#selected')

const rulesOption = {
    stringText:['is', 'is not', 'contains', 'does not contain', 'is present', 'is not present'],
    stringId: ['is', 'is not', 'contains', 'does not contain'],
    stringPicker:['is', 'is not', 'includes', 'does not include'],
    number:['is equal to', 'is not equal to','is greater than', 'is present', 'is not present'],
    dates:['between', 'after', 'before', 'today', 'yesterday', 'this month', 'last month', 'last 15 days', 'last 39 days', 'last 60 days', 'last 3 months', 'last 6 months'],
    boolean:['is', 'is not']
};

s1.addEventListener("change", () => {
    const selected = rulesOption[this.class];
    while(s2.optionslength > 0){
        s2.options.remove(0);
    }
    Array.from(selected).forEach((o) => {
        const option = newOption(o, o);
        s2.appendChild(option);
    });
});

//2 - Populate Select 3

