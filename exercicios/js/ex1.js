var idade = prompt('Digite a sua idade')

if(idade>=0 && idade<12){
    document.write('PARABÉNS VOCÊ É UMA CRIANÇA')
}else if(idade>=12 && idade<25){
    document.write('PARABÉNS VOCÊ É UM JOVEM')
}else if(idade>=25 && idade<60){
    document.write('PARABÉNS VOCÊ É UM ADULTO')
}else if(idade>=60){
    document.write('PARABÉNS VOCÊ É UM IDOSO')
}