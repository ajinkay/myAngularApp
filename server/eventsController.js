var fs=require('fs');
module.exports.get=function(req,res)
{
    if(req.params.id=="" )
    {
        var event=fs.readFileSync('../app/data/json')
    }
    else{
    var event=fs.readFileSync('../app/data/json/'+req.params.id+'.json','utf-8');
    res.setHeader("Content-Type","application/json");
    res.send(event);
    }
}
module.exports.save=function(req,res)
{
    var event=req.body;
    
    fs.writeFileSync('../app/data/json/'+req.params.id+".json",JSON.stringify(event));
    res.send(event);
}

module.exports.getAll=function(req,res)
{
    var path="../app/data/json";
    var files=[];
    try{
    var files=fs.readdirSync(path);
    }
    catch(e)
    {
        console.log(e);
        res.send(e);
        res.end();
    }
    var result="[";
    
    for(var id=0;id<files.length;id++)
    {
        if(files[id].indexOf('.json')>=0)
        {
            result+=fs.readFileSync(path+"/"+files[id])+",";
        }
    }
        result=result.substring(0,result.length-1);
        result+="]";
       
        res.setHeader("Content-type","application/json");
        res.send(result);
        res.end();
    
}