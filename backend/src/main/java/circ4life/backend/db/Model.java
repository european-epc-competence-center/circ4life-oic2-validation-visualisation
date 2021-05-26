package circ4life.backend.db;

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
    private Double innovativeness;

    @NotNull
    private Double businessPotential;

    @NotNull
    private Double industryApplicability;

    public Model(String modelType, Double linearToCircular, Double innovativeness, Double businessPotential, Double industryApplicability){
        this.modelType = modelType;
        this.linearToCircular = linearToCircular;
        this.innovativeness = innovativeness;
        this.businessPotential = businessPotential;
        this.industryApplicability = industryApplicability;
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

    public Double getInnovativeness() {
        return innovativeness;
    }

    public void setInnovativeness(Double innovativeness) {
        this.innovativeness = innovativeness;
    }

    public Double getBusinessPotential() {
        return businessPotential;
    }

    public void setBusinessPotential(Double businessPotential) {
        this.businessPotential = businessPotential;
    }

    public Double getIndustryApplicability() {
        return industryApplicability;
    }

    public void setIndustryApplicability(Double industryApplicability) {
        this.industryApplicability = industryApplicability;
    }
}
