package com.hetal.shoppingbackend.dao;

import java.util.List;

import com.hetal.shoppingbackend.dto.Category;

public interface CategoryDAO {
	
	List<Category> list();
	Category get(int id);

}
