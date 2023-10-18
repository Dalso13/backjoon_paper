-- 코드를 입력하세요
SELECT * from 
(SELECT NAME, count(NAME) as count from ANIMAL_INS
    group by NAME
) 
where count > 1
order by name asc
