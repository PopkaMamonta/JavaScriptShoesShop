/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package session;

import entity.Model;
import entity.ModelData;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author user
 */
@Stateless
public class ModelDataFacade extends AbstractFacade<ModelData> {

    @PersistenceContext(unitName = "JavaScriptShoesShopPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public ModelDataFacade() {
        super(ModelData.class);
    }
    
        public List<ModelData> findAll(Model model) {
        return em.createQuery("SELECT md FROM ModelData md WHERE md.model = :model")
                .setParameter("model", model)
                .getResultList();
    }
    
}
