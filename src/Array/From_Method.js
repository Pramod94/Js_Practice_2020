export default function FromMethod() {
    const obj = {
        0 : 'A',
        length : 3
      }
      
      const res = Array.from([1,2,3], (ele) => ele + ele );
      
      console.log(res);
      
      const res1 = Array.from(obj);
      
      console.log(res1);
      
      const res2 = Array.from('A String');
      
      console.log(res2);
      
      const res3 = Array.from({ length : 5}, () => 1);
      
      console.log(res3);
}
