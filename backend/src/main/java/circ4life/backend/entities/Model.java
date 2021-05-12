package circ4life.backend.entities;

import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
@Table(name = "model")
public class Model {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    private String modelType;

    @NotNull
    private Double linearToCircular;

    @NotNull
    private Double businessAsUsualToInnovative;

    @NotNull
    private Double lowBusinessPotentialToHighBusinessPotential;

    @NotNull
    private Double lowIndustryAppicabilityToHighIndustryApplicability;

    public Model(String modelType, Double linearToCircular, Double businessAsUsualToInnovative, Double lowBusinessPotentialToHighBusinessPotential, Double lowIndustryAppicabilityToHighIndustryApplicability){
        this.modelType = modelType;
        this.linearToCircular = linearToCircular;
        this.businessAsUsualToInnovative = businessAsUsualToInnovative;
        this.lowBusinessPotentialToHighBusinessPotential = lowBusinessPotentialToHighBusinessPotential;
        this.lowIndustryAppicabilityToHighIndustryApplicability = lowIndustryAppicabilityToHighIndustryApplicability;
    }

    public Model() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getModelType() {
        return modelType;
    }

    public void setModelType(String modelType) {
        this.modelType = modelType;
    }

    public Double getLinearToCircular() {
        return linearToCircular;
    }

    public void setLinearToCircular(Double linearToCircular) {
        this.linearToCircular = linearToCircular;
    }

    public Double getBusinessAsUsualToInnovative() {
        return businessAsUsualToInnovative;
    }

    public void setBusinessAsUsualToInnovative(Double businessAsUsualToInnovative) {
        this.businessAsUsualToInnovative = businessAsUsualToInnovative;
    }

    public Double getLowBusinessPotentialToHighBusinessPotential() {
        return lowBusinessPotentialToHighBusinessPotential;
    }

    public void setLowBusinessPotentialToHighBusinessPotential(Double lowBusinessPotentialToHighBusinessPotential) {
        this.lowBusinessPotentialToHighBusinessPotential = lowBusinessPotentialToHighBusinessPotential;
    }

    public Double getLowIndustryAppicabilityToHighIndustryApplicability() {
        return lowIndustryAppicabilityToHighIndustryApplicability;
    }

    public void setLowIndustryAppicabilityToHighIndustryApplicability(Double lowIndustryAppicabilityToHighIndustryApplicability) {
        this.lowIndustryAppicabilityToHighIndustryApplicability = lowIndustryAppicabilityToHighIndustryApplicability;
    }
}
