const axios= require("axios")
const fs=require("fs")
const define_var=require("readline-sync")
axios.get("https://api.merakilearn.org/courses")
.then(resp=>{
// console.log(resp.data)
meraki_data=resp.data
// console.log(meraki_data)
const convert_data=JSON.stringify(meraki_data,null,2)
fs.appendFileSync("all data.json",convert_data)
// console.log(string1)
s=0
for (i of meraki_data){
    // console.log(s+1,i['name'],":",i['id'])  
    console.log(`${s+1}.${i['name']} : ${i['id']}`)
    s++
}
const select_cource=define_var.question("which cource you want :")
const select_cource1=select_cource-1
console.log(meraki_data[select_cource1]['name'])
console.log(meraki_data[select_cource1]['id'])

axios.get("https://api.merakilearn.org/courses/"+meraki_data[select_cource1]['id']+" "+ "/exercises")
.then(resp1=>{
    parent_id_data=resp1.data
    // console.log(select_cource_data)
var convert_data1=JSON.stringify(parent_id_data,null,2)
fs1=fs.writeFileSync("parent_id_file.json",convert_data1)

store_data=parent_id_data['course']['exercises']
sr=0
for (j in store_data){
    // console.log(j)
    console.log(sr+1,store_data[j]['name'])
    sr++
}
const parent_id =define_var.question("enter the parent_id :")
const slug=store_data[parent_id]['content']
console.log(slug)


}).catch((error_1st)=>{
    console.log(error_1st)
})
}).catch((error_2nd)=>{
    console.log(error_2nd)
})


