package circ4life.backend.Calculations;

import circ4life.backend.entities.Model;
import com.sun.istack.NotNull;

import java.util.List;

public class DetermineAverage {

    public DetermineAverage() {
    }

    public Model createAverageModel(List<Model> modelList) {
        Model averageType = new Model();

        averageType.setModelType(this.averageModelType(modelList));
        averageType.setLinearToCircular(this.averageLinearToCircular(modelList));
        averageType.setBusinessAsUsualToInnovative(this.averageBusinessAsUsualToInnovative(modelList));
        averageType.setLowBusinessPotentialToHighBusinessPotential(this.averageLowBusinessPotentialToHighBusinessPotential(modelList));
        averageType.setLowIndustryAppicabilityToHighIndustryApplicability(this.averageLowIndustryAppicabilityToHighIndustryApplicability(modelList));

        return averageType;
    }

    private String averageModelType(List<Model> models) {
        String modelName = "";
        for (Model model : models) {
            modelName = model.getModelType();
        }
        modelName = modelName + "Average";
        return modelName;
    }

    private Double averageLinearToCircular(List<Model> models) {
        int i = 0;
        double averageValue = 0;
        for (Model model : models) {
            averageValue += model.getLinearToCircular();
            i++;
        }
        return averageValue / i;
    }

    private Double averageBusinessAsUsualToInnovative(List<Model> models) {
        int i = 0;
        double averageValue = 0;
        for (Model model : models) {
            averageValue += model.getBusinessAsUsualToInnovative();
            i++;
        }
        return averageValue / i;
    }

    private Double averageLowBusinessPotentialToHighBusinessPotential(List<Model> models) {
        int i = 0;
        double averageValue = 0;
        for (Model model : models) {
            averageValue += model.getLowBusinessPotentialToHighBusinessPotential();
            i++;
        }
        return averageValue / i;
    }

    private Double averageLowIndustryAppicabilityToHighIndustryApplicability(List<Model> models) {
        int i = 0;
        double averageValue = 0;
        for (Model model : models) {
            averageValue += model.getLowIndustryAppicabilityToHighIndustryApplicability();
            i++;
        }
        return averageValue / i;
    }

}