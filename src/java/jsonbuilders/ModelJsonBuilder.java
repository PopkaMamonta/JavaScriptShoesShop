

package jsonbuilders;

import entity.Model;
import java.util.List;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;


public class ModelJsonBuilder {
    public JsonObject getJsonModel(Model model){
        JsonObjectBuilder job = Json.createObjectBuilder();
        job.add("id", model.getId());
        job.add("modelname", model.getName());
        job.add("brand",model.getBrand());
        job.add("price", model.getPrice());
        job.add("size", model.getSize());
        job.add("quantity", model.getQuantity());
        job.add("pathToImage", model.getPathToImage());
        return job.build();
    }
    public JsonArray getJsonArrayModel(List<Model> listAccountData){
        JsonArrayBuilder jab = Json.createArrayBuilder();
        for(int i = 0; i < listAccountData.size(); i++){
            jab.add(getJsonModel(listAccountData.get(i)));
        }
        return jab.build();
    }
}
