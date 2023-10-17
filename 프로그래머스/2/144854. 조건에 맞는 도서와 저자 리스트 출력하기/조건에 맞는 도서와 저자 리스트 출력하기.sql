-- 코드를 입력하세요
SELECT book_id,author_name,TO_CHAR(PUBLISHED_DATE, 'YYYY-MM-DD') from BOOK inner join AUTHOR
on book.AUTHOR_ID = author.AUTHOR_ID
where category = '경제'
order by PUBLISHED_DATE asc
