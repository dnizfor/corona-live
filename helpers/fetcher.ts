
const fetchFunction =  (url: string) => fetch(url).then((res) => res.json());

export default fetchFunction