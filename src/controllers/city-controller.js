const { StatusCodes }=require('http-status-codes');
const { CityService }=require('../services');
const {SuccessResponse ,ErrorResponse }=require('../utils/common');

/*
* POST:cities
* req body {name:'London'}
 */

async function createCity(req,res)
{
    try{

        console.log("Request Body:", req.body);

        const city=await CityService.createCity({
            name:req.body.name
        });
        SuccessResponse.data = city;

        return res
               .status(StatusCodes.CREATED)
               .json(SuccessResponse);
    }catch(error)
    {
        ErrorResponse.error=error;
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
                

    }

}

module.exports={
    createCity
}