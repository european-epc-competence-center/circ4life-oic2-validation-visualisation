package circ4life.backend.Calculations;

import circ4life.backend.entities.Model;

import java.util.List;

public class DetermineAverage {

    public DetermineAverage() {
    }

    // returns Model with average values
    public Model createAverageModel(List<Model> modelList) {
        Model averageType = new Model();
        Double[] averageList = getAverage(modelList);

        averageType.setModelType(modelList.get(0).getModelType() + "Average");
        averageType.setLinearToCircular(averageList[0]);
        averageType.setInnovativeness(averageList[1]);
        averageType.setBusinessPotential(averageList[2]);
        averageType.setIndustryApplicability(averageList[3]);

        return averageType;
    }

    // returns Double Array with average values from the Modellist
    private Double[] getAverage(List<Model> models) {
        int i = 0;
        double averageLinear, averageInnovative, averageBusiness, averageApplicability;
        averageLinear = averageInnovative = averageBusiness = averageApplicability = 0;
        for (Model model : models) {
            if (checkNotNull(model)) {
                averageLinear += model.getLinearToCircular();
                averageInnovative += model.getInnovativeness();
                averageBusiness += model.getBusinessPotential();
                averageApplicability += model.getIndustryApplicability();
                i++;
            }
        }
        if (i != 0) {
            return new Double[]{averageLinear / i, averageInnovative / i, averageBusiness / i, averageApplicability / i};
        } else {
            return new Double[]{0.0, 0.0, 0.0, 0.0};
        }
    }

    // returns true if current Model does not have any NullPointer. Else false
    private Boolean checkNotNull(Model model) {
        return model.getLinearToCircular() != null
                && model.getInnovativeness() != null
                && model.getBusinessPotential() != null
                && model.getIndustryApplicability() != null;
    }

}