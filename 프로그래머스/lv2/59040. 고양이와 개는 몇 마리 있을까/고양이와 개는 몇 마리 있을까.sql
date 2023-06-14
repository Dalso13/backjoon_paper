-- 코드를 입력하세요
SELECT animal_type,COUNT(animal_type) AS "COUNT" FROM ANIMAL_INS 
GROUP BY animal_type
ORDER BY animal_type ASC