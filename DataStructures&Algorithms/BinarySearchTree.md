# Proje 3
### [7,5,1,8,3,6,0,9,4,2] dizisinin Binary-Search-Tree aşamalarını yazınız.
***
###### Root'un sağ tarafından kendinden büyük elemanlar, sol tarafında ise küçük elemanlar bulunur.
###### Binary Search Tree oluştururken yukarıdaki bilgi referans alınır.

- ```Root -> 7``` olsun.
- ```5```, 7'den küçüktür, dolayısıyla 1. Düğüm Satırı'nda 7'nin sol tarafında olacaktır.
 
                  7          -> Root Satırı
                 /
                /
               5             -> 1. Düğüm Satırı
               
- ```1```, 7 ve 5'ten küçüktür, dolayısıyla 2. Düğüm Satırı'nda 5'in sol tarafında olacaktır.        
        
                  7          -> Root Satırı
                 /
                /
               5             -> 1. Düğüm Satırı
              /
             /
            1                -> 2. Düğüm Satırı

- ```8```, 7'den büyüktür, dolayısıyla 1. Düğüm Satırı'nda 7'nin sağ tarafında olacaktır.            
        
                  7           -> Root Satırı
                 / \
                /   \
               5     8        -> 1. Düğüm Satırı
              /
             /
            1                 -> 2. Düğüm Satırı

- ```3```, 7 ve 5'ten küçüktür ancak 1'den büyüktür, dolayısıyla 3. Düğüm Satırı'nda 1'in sağ tarafında olacaktır.   
        
                  7           -> Root Satırı
                 / \
                /   \
               5     8        -> 1. Düğüm Satırı
              /
             /
            1                 -> 2. Düğüm Satırı
             \
              \
               3              -> 3. Düğüm Satırı

- ```6```, 7'den küçüktür ancak 5'ten büyüktür, dolayısıyla 2. Düğüm Satırı'nda 5'in sağ tarafında olacaktır.   
        
                  7          -> Root Satırı
                 / \
                /   \
               5     8       -> 1. Düğüm Satırı
              / \
             /   \
            1     6          -> 2. Düğüm Satırı
             \
              \
               3             -> 3. Düğüm Satırı
    
- ```0```, 7, 5, ve 1'den küçüktür, dolayısıyla 3. Düğüm Satırı'nda 1'in sol tarafında olacaktır.
                  
                  7          -> Root Satırı
                 / \
                /   \
               5     8       -> 1. Düğüm Satırı
              / \
             /   \
            1     6          -> 2. Düğüm Satırı
           / \
          /   \
         0     3             -> 3. Düğüm Satırı

- ```9```, 7 ve 8'den büyükyür, dolayısıyla 2. Düğüm Satırı'nda 8'in sağ tarafında olacaktır.

                  7          -> Root Satırı
                 / \
                /   \
               5     8       -> 1. Düğüm Satırı
              / \     \
             /   \     \
            1     6     9    -> 2. Düğüm Satırı
           / \
          /   \
         0     3             -> 3. Düğüm Satırı

- ```4```, 7 ve 5'ten küçüktür ancak 1 ve 3'ten büyüktür, dolayısıyla 4. Düğüm Satırı'nda 3'ün sağ tarafında olacaktır. 

                  7          -> Root Satırı
                 / \
                /   \
               5     8       -> 1. Düğüm Satırı
              / \     \
             /   \     \
            1     6     9    -> 2. Düğüm Satırı
           / \
          /   \
         0     3             -> 3. Düğüm Satırı
                \
                 \
                  4          -> 4. Düğüm Satırı
         
- ```2```, 7 ve 5'ten küçük, 1'den büyük ve 3'ten küçüktür, dolayısıyla 4. Düğüm Satırı'nda 3'ün sol tarafında olacaktır.

                  7          -> Root Satırı
                 / \
                /   \
               5     8       -> 1. Düğüm Satırı
              / \     \
             /   \     \
            1     6     9    -> 2. Düğüm Satırı
           / \
          /   \
         0     3             -> 3. Düğüm Satırı
              / \
             /   \
            2     4          -> 4. Düğüm Satırı
                  


* * *
[Patika.dev](https://www.patika.dev/tr)
