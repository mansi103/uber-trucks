package com.india.nec.ubertrucks.repositories;

import com.india.nec.ubertrucks.models.Order;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface OrderRepository extends MongoRepository<Order, ObjectId> {

    List<Order> findAllByFinalizedOrder(boolean status);

}
