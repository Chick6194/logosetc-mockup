const TIERS={basic:['Basic',59,'7 days'],standard:['Standard',149,'Full song with vocals, 1 revision'],premium:['Premium',249,'Lyric sheet, WAV, 2 revisions']};
const ST=['Received','Writing','Recording','In review','Delivered'];
const K='songgift_orders';
const load=()=>JSON.parse(localStorage.getItem(K)||'[]'),save=o=>localStorage.setItem(K,JSON.stringify(o));
if(new URLSearchParams(location.search).get('demo')==='1'&&!load().length)save([
{id:'SG-1001',recipient:'Maria',occasion:'Birthday',genre:'Pop',mood:'Joyful',tier:'standard',rush:false,status:4,song:'sample.wav',email:'demo@example.com',total:149},
{id:'SG-1002',recipient:'Jake & Priya',occasion:'Wedding',genre:'Acoustic',mood:'Romantic',tier:'premium',rush:true,status:2,email:'demo2@example.com',total:299},
{id:'SG-1003',recipient:'Grandpa Joe',occasion:'Anniversary',genre:'Country',mood:'Nostalgic',tier:'basic',rush:false,status:0,email:'demo3@example.com',total:59}]);
