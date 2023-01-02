# Proje 1
### [22,27,16,2,18,6] -> Insertion Sort
***
#### 1) Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

1. [2,27,16,22,18,6] -> ```2``` dizinin küçük sayısıdır, en başa alabilmek için ```22``` ile yer değiştirir.
2. [2,6,16,22,18,27] -> İkinci küçük sayı ```6```'dır ikinci sıraya almak için ```27``` ile yer değiştirir.
3. [2,6,16,18,22,27] -> Üçüncü sayı ```16```'dır, sıralaması doğru olduğu için herhangi bir değişiklik yapılmaz. Dördüncü sayı ```18```'dir ve sıralamaya uygun olması için ```22``` ile yer değiştirir. Beşinci ve altıncı sayı sıralamaya uygun olduğundan sıralamada herhangi bir değişiklik yapılmaz.
*** 
#### 2) Big-O gösterimini yazınız.
###### Dizideki eleman sayısı n olsun. Big-O yöntemine göre sıralama yapılırken işlem sayısı da ```n``` olur. Son işlem sayısı ```1``` olana kadar devam eder.
- ```[22,27,16,2,18,6]``` dizisinde 6 tane eleman vardır, yani 6 tane işlem yapılacaktır demektir. Şöyle ki,
- ilk adımda ```n```-> 6 tane işlem,
- ikinci adımda en küçük elemanı (yani birinci) bulmak için ```(n-1)```-> 6-1=5 tane işlem,
- Üçüncü adımda ikinci elemanı bulmak için ```(n-2)```-> 6-2=4 tane işlem,
- Dördüncü adımda üçüncü elemanı bulmak için ```(n-3)```-> 6-3=3 tane işlem,
- Beşinci adımda dördüncü elemanı bulmak için ```(n-4)```-> 6-4=2 tane işlem yapılır.
- Altı elemanlı dizi olduğu için daha fazla işlem yapılmasına gerek yoktur çünkü son eleman altıncı elemandır. 
- Bu algoritmada ```n+(n-1)+(n-2)+(n-3)+(n-4)+1``` kadar işlem yapılır. Bu işlemin formülü: ```[n(n+1)]/2```'dir. Bu formül sadeleştirilerek: ```(n²+n)/2``` elde edilir.
- Big-O Notation'da kat sayı önemsizdir; yani domine eden fonksiyon ```n²``` alınır.
#### Big-O değeri = O(n²)
* * *
#### 3) Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız.

- ```Average case: Aradığımız sayının ortada olması```
  - [.,.,.,18,.,.,.] 
- ```Worst case: Aradığımız sayının sonda olması```
  - [.,.,.,.,.,.,18]
- ```Best case: Aradığımız sayının dizinin en başında olması```
  - [18,.,.,.,.,.,.,]
 
- [2,6,16,18,22,27] dizisine bakıldığında 18 sayısı ortada olduğu için ```Average Case``` kapsamına girer.
***
#### 4) [7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.
1. [```2```,3,5,8,7,9,4,15,6]
2. [2,```3```,5,8,7,9,4,15,6]
3. [2,3,```4```,8,7,9,5,15,6]
4. [2,3,4,```5```,7,9,8,15,6]

***
[Patika.dev](https://www.patika.dev/tr)
