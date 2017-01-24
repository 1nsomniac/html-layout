function finder (string, array) {
for (var i = 0; i < array.length + 1; i++) {
console.log (array[i]);
if (array[i] == string){
return true;
}
}
return false;
}
a = [1, 2, "three"];
b = "three";
finder(b, a);
