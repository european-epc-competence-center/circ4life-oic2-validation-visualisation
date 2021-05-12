package circ4life.backend.repository;

import circ4life.backend.entities.Model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ModelRepository extends JpaRepository<Model, Integer> {

    List<Model> findByModelType(String modelType);

}
