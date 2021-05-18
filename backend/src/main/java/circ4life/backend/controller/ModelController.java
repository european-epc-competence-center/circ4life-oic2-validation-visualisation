package circ4life.backend.controller;

import circ4life.backend.Calculations.DetermineAverage;
import circ4life.backend.entities.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import circ4life.backend.repository.ModelRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class ModelController {

    @Autowired
    ModelRepository modelRepository;

    @RequestMapping(
            method = RequestMethod.GET,
            path = "/model",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public List<Model> getAllData(){
        return modelRepository.findAll();
    }

    @RequestMapping(
            method = RequestMethod.GET,
            path = "/modelId/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public Optional<Model> getDataById(@PathVariable Integer id){
        return modelRepository.findById(id);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            path = "/modelType/{typeOfModel}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public List<Model> getDataByModelType(@PathVariable String typeOfModel){
        return modelRepository.findByModelType(typeOfModel);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            path = "/modelOneTypeAverage/{type}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public Model getDataByOneModelType(@PathVariable String type){
        DetermineAverage determineAverage = new DetermineAverage();
        Model averageType = determineAverage.createAverageModel(modelRepository.findByModelType(type));

        return averageType;
    }

    @RequestMapping(
            method = RequestMethod.GET,
            path = "/modelAllTypeAverage/{typeA}/{typeB}/{typeC}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public List<Model> getDataByAllModelType(@PathVariable String typeA, @PathVariable String typeB, @PathVariable String typeC){
        DetermineAverage determineAverage = new DetermineAverage();
        Model averageTypeA = determineAverage.createAverageModel(modelRepository.findByModelType(typeA));
        Model averageTypeB = determineAverage.createAverageModel(modelRepository.findByModelType(typeB));
        Model averageTypeC = determineAverage.createAverageModel(modelRepository.findByModelType(typeC));

        List<Model> averageAllTypes = new ArrayList<Model>();
        averageAllTypes.add(averageTypeA);
        averageAllTypes.add(averageTypeB);
        averageAllTypes.add(averageTypeC);

        return averageAllTypes;
    }

    @RequestMapping(
            method = RequestMethod.POST,
            path = "/InsertModel")
    public Model setData(@RequestBody Model newData){ modelRepository.save(newData);
         return newData;
    }

    @RequestMapping(
            method = RequestMethod.DELETE,
            path = "deleteModelById/{id}"
    )
    public String deleteModel(@PathVariable Integer id){
                modelRepository.deleteById(id);
                return "ok";
            }

}
