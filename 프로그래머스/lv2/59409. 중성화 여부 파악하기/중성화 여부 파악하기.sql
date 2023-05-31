-- 코드를 입력하세요
SELECT ANIMAL_ID,NAME, CASE
WHEN SEX_UPON_INTAKE = 'Neutered Male' THEN 'O'
WHEN SEX_UPON_INTAKE = 'Spayed Female' THEN 'O'
WHEN SEX_UPON_INTAKE = 'Intact Male' THEN 'X'
WHEN SEX_UPON_INTAKE = 'Intact Female' THEN 'X'
END AS "중성화"
from ANIMAL_INS 
ORDER BY ANIMAL_ID ASC