const TIERS={basic:['Basic',99,'7 days'],standard:['Standard',149,'Full song with vocals, 1 revision'],premium:['Premium',249,'Lyric sheet, WAV, 2 revisions']};
const ST=['Received','Writing','Recording','In review','Delivered'];
const ARTISTS=['Sample Artist A — R&B/Soul','Sample Artist B — Pop/Acoustic','Sample Artist C — Country/Folk','Sample Artist D — Gospel/Inspirational'];
const rushTxt=d=>d?' + Rush ('+(7-d)+(7-d==1?' day':' days')+', +$'+d*25+')':'';
const K='songgift_orders';
const load=()=>JSON.parse(localStorage.getItem(K)||'[]'),save=o=>localStorage.setItem(K,JSON.stringify(o));
if(new URLSearchParams(location.search).get('demo')==='1'&&!load().length)save([
{id:'SG-1001',recipient:'Maria',pron:'mah-REE-ah',must:'Mimi, sunflowers',tempo:'Upbeat',like:'Happy by Pharrell Williams',avoid:'Mention of age',story:'Best friend since college.',occasion:'Birthday',genre:'Pop',mood:'Joyful',tier:'standard',rush:0,artist:'Sample Artist A — R&B/Soul',status:4,song:'sample.wav',email:'demo@example.com',total:149},
{id:'SG-1002',recipient:'Jake & Priya',occasion:'Wedding',genre:'Acoustic',mood:'Romantic',tier:'premium',rush:3,artist:'Any available artist',status:2,email:'demo2@example.com',total:324},
{id:'SG-1003',recipient:'Grandpa Joe',occasion:'Anniversary',genre:'Country',mood:'Nostalgic',tier:'basic',rush:false,status:0,email:'demo3@example.com',total:99,artist:'Sample Artist C — Country/Folk'}]);
