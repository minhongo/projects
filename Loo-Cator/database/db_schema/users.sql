CREATE TABLE IF NOT EXISTS `campus` (
  `cmp_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `cmp_name` varchar(50) NOT NULL,
  `cmp_city` varchar(50) NOT NULL,
  `cmp_state` varchar(50) NOT NULL,
  `cmp_zipcode` int(5) NOT NULL,
  PRIMARY KEY (`cmp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DELETE FROM `campus`;
INSERT INTO `campus` (`cmp_id`, `cmp_name`, `cmp_city`, `cmp_state`, `cmp_zipcode`) VALUES
	(1, 'NC State University', 'Raleigh', 'NC', '27606');

CREATE TABLE IF NOT EXISTS `building` (
  `bld_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `bld_name` varchar(100) NOT NULL DEFAULT '0',
  `bld_address` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`bld_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DELETE FROM `building`;
INSERT INTO `building` (`bld_id`, `bld_name`, `bld_address`) VALUES
    (1, 'TalleyStudentUnion', '2610 Cates Ave, Raleigh, NC 27606'),
    (2, 'James B. Hunt Jr. Library', '1070 Partners Way, Raleigh, NC 27606'),
    (3, 'D. H. Hill Jr. Library', '2 Broughton Dr. Raleigh, NC 27695-7111');


CREATE TABLE IF NOT EXISTS `building_campus` (
  `bc_bld_id` int(11) unsigned NOT NULL,
  `bc_cmp_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`bc_bld_id`,`bc_cmp_id`),
  KEY `FK_BC_CMP` (`bc_cmp_id`),
  CONSTRAINT `FK_BC_CMP` FOREIGN KEY (`bc_cmp_id`) REFERENCES `campus` (`cmp_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_BC_BLD` FOREIGN KEY (`bc_bld_id`) REFERENCES `building` (`bld_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DELETE FROM `building_campus`;
INSERT INTO `building_campus` (`bc_bld_id`, `bc_cmp_id`) VALUES
    (1,1),
    (2,1),
    (3,1);


CREATE TABLE IF NOT EXISTS `floor` (
  `flr_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `flr_name` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`flr_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DELETE FROM `floor`;
INSERT INTO `floor` (`flr_id`, `flr_name`) VALUES
    (1, 'talley1'),
    (2, 'talley2'),
    (3, 'talley3'),
    (4, 'talley4'),
    (5, 'talley5'),
    (6, 'hunt1'),
    (7, 'hunt2'),
    (8, 'hunt3'),
    (9, 'hunt4'),
    (10, 'hunt5'),
    (11, 'hillG'),
    (12, 'hill1'),
    (13, 'hill2'),
    (14, 'hill3'),
    (15, 'hill4'),
    (16, 'hill5'),
    (17, 'hill6'),
    (18, 'hill7'),
    (19, 'hill8'),
    (20, 'hill9');


CREATE TABLE IF NOT EXISTS `floor_building` (
  `fb_flr_id` int(11) unsigned NOT NULL,
  `fb_bld_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`fb_flr_id`,`fb_bld_id`),
  KEY `FK_FB_BLD` (`fb_bld_id`),
  CONSTRAINT `FK_FB_BLD` FOREIGN KEY (`fb_bld_id`) REFERENCES `building` (`bld_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_FB_FLR` FOREIGN KEY (`fb_flr_id`) REFERENCES `floor` (`flr_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DELETE FROM `floor_building`;
INSERT INTO `floor_building` (`fb_flr_id`, `fb_bld_id`) VALUES
    (1,1),
    (2,1),
    (3,1),
    (4,1),
    (5,1),
    (6, 2),
    (7, 2),
    (8, 2),
    (9, 2),
    (10, 2),
    (11, 3),
    (12, 3),
    (13, 3),
    (14, 3),
    (15, 3),
    (16, 3),
    (17, 3),
    (18, 3),
    (19, 3),
    (20, 3);


CREATE TABLE IF NOT EXISTS `bathroom` (
  `bth_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `bth_name` varchar(100) NOT NULL DEFAULT '0',
  `bth_sum_reviews` INT NOT NULL DEFAULT 0,
  `bth_num_reviews` INT NOT NULL DEFAULT 0,
  `floorplan_link` varchar(255) NOT NULL DEFAULT 'No bathrooms',
  PRIMARY KEY (`bth_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DELETE FROM `bathroom`;
INSERT INTO `bathroom` (`bth_id`, `bth_name`, `bth_sum_reviews`, `bth_num_reviews`, `floorplan_link`) VALUES
    (1, 'Starbucks Bathroom', 12, 3, "https://studentcenters.ncsu.edu/maps/talley/"),
    (2, 'Elevator Bathroom', 0, 1, "https://studentcenters.ncsu.edu/maps/talley/"),
    (3, 'PCJ Bathroom', 2, 1, "https://studentcenters.ncsu.edu/maps/talley/"),
    (4, 'Floor 3 Bathroom', 4, 1, "https://bwac.arizona.edu/sites/default/files/Fall2019/Map_Room%203285.jpg"),
    (5, 'Floor 4 Bathroom', 0, 0, "https://bwac.arizona.edu/sites/default/files/Fall2019/Map_Room%204140.jpg"),
    (6, 'Floor 5 Bathroom', 0, 0, "https://studentcenters.ncsu.edu/maps/talley/"),
    (7, 'Common Grounds Bathroom', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/hunt-library-floor-1.jpg"),
    (8, 'Floor 2 Elevator Bathroom', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/hunt-library-floor-2.jpg"),
    (9, 'Floor 2 Lobby Bathroom', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/hunt-library-floor-2.jpg"),
    (10, 'Floor 3 Bathroom', 0, 0, ""),
    (11, 'Floor 4 Bathroom', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/hunt-library-floor-4.jpg"),
    (12, 'Floor 5 Bathroom', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/hunt-library-floor-5.jpg"),
    (13, 'Single Bathroom (Left)', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_01.png"),
    (14, 'Single Bathroom (Right)', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_01.png"),
    (15, 'Learning Commons Bathroom', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_01.png"),
    (16, 'Brickyard Bathroom', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_01.png"),
    (17, 'Westwing Bathroom', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_02.png"),
    (18, 'South Bathroom', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_02.png"),
    (19, 'Eastwing Bathroom', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_02.png"),
    (20, 'Single Bathroom', 0,0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_03.png"),
    (21, 'Visualization Gallery Bathroom', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_03.png"),
    (22, 'Floor 4 Men', 0,0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_04.png"),
    (23, 'Floor 4 Women', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_04.png"),
    (24, 'Floor 5 Men', 0,0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_05.png"),
    (25, 'Floor 5 Women', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_05.png"),
    (26, 'Floor 6 Men', 0,0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_06.png"),
    (27, 'Floor 6 Women', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_06.png"),
    (28, 'Floor 7 Men', 0,0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_07.png"),
    (29, 'Floor 7 Women', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_07.png"),
    (30, 'Floor 8 Men', 0,0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_08.png"),
    (31, 'Floor 8 Women', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_08.png"),
    (32, 'Floor 9 Men', 0,0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_09.png"),
    (33, 'Floor 9 Women', 0, 0, "https://www.lib.ncsu.edu/sites/default/files/2023-08/floor_09.png");

CREATE TABLE IF NOT EXISTS `bathroom_floor` (
  `bf_bth_id` int(11) unsigned NOT NULL,
  `bf_flr_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`bf_bth_id`,`bf_flr_id`),
  KEY `FK_BF_FLR` (`bf_flr_id`),
  CONSTRAINT `FK_BF_FLR` FOREIGN KEY (`bf_flr_id`) REFERENCES `floor` (`flr_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_BF_BTH` FOREIGN KEY (`bf_bth_id`) REFERENCES `bathroom` (`bth_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DELETE FROM `bathroom_floor`;
INSERT INTO `bathroom_floor` (`bf_bth_id`, `bf_flr_id`) VALUES
    (1, 1),
    (2, 2),
    (3, 2),
    (4, 3),
    (5, 4),
    (6, 5),
    (7, 6),
    (8, 7),
    (9, 7),
    (10, 8),
    (11, 9),
    (12, 10),
    (13, 12),
    (14, 12),
    (15, 12),
    (16, 12),
    (17,13),
    (18, 13),
    (19,13),
    (20, 14),
    (21, 14),
    (22, 15),
    (23, 15),
    (24, 16),
    (25, 16),
    (26, 17),
    (27, 17),
    (28, 18),
    (29, 18),
    (30, 19),
    (31, 19),
    (32, 20),
    (33, 20);



-- Reviews Table
CREATE TABLE IF NOT EXISTS `review` (
  `rvw_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `rvw_cleanliness_rtng` INT NOT NULL CHECK (`rvw_cleanliness_rtng` >= 0 AND `rvw_cleanliness_rtng` <= 5),
  `rvw_privacy_rtng` INT NOT NULL CHECK (`rvw_privacy_rtng` >= 0 AND `rvw_privacy_rtng` <= 5),
  `rvw_aesthetic_rtng` INT NOT NULL CHECK (`rvw_aesthetic_rtng` >= 0 AND `rvw_aesthetic_rtng` <= 5),
  `rvw_amenities_rtng` INT NOT NULL CHECK (`rvw_amenities_rtng` >= 0 AND `rvw_amenities_rtng` <= 5),
  `rvw_overall_rtng` INT NOT NULL CHECK (`rvw_overall_rtng` >= 0 AND `rvw_overall_rtng` <= 5), -- This is the only field displayed avged per bathroom with this the current bathroom fields
  `rvw_hasChangingTable` BOOLEAN DEFAULT FALSE,
  `rvw_hasAccessibility` BOOLEAN DEFAULT FALSE,
  `rvw_comment` VARCHAR(400),
  PRIMARY KEY (`rvw_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DELETE FROM `review`;
INSERT INTO `review` (`rvw_id`, `rvw_cleanliness_rtng`, `rvw_privacy_rtng`, `rvw_aesthetic_rtng`, 
                      `rvw_amenities_rtng`,`rvw_overall_rtng`, `rvw_hasChangingTable`,`rvw_hasAccessibility`, `rvw_comment`) VALUES
    (1, 5, 5, 5, 5, 5, TRUE, TRUE, 'big ol comment1'),
    (2, 0, 0, 0, 0, 0, FALSE, FALSE, ''),
    (3, 1, 2, 3, 4, 3, FALSE, FALSE, 'big ol comment3'),
    (4, 2, 4, 3, 4, 4, FALSE, TRUE, 'big ol comment4'),
    (5, 5, 2, 3, 1, 2, TRUE, TRUE, 'big ol comment5'),
    (6, 5, 5, 4, 5, 4, TRUE, TRUE, 'big ol comment6');

CREATE TABLE IF NOT EXISTS `user` (
  `usr_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `usr_first_name` varchar(100) NOT NULL,
  `usr_last_name` varchar(100) NOT NULL,
  `usr_username` varchar(150) NOT NULL,
  `usr_password` varchar(255) NOT NULL,
  `usr_salt` varchar(100) NOT NULL,
  PRIMARY KEY (`usr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DELETE FROM `user`;
INSERT INTO `user` (`usr_id`, `usr_first_name`, `usr_last_name`, `usr_username`, `usr_password`, `usr_salt`) VALUES
	(1, 'Stu', 'Dent', 'student', '83d9bdb5e20f3571b087db9aabf190a296741c3e864d7742f35658cfccc1b79c4599aad25084aa9a28c649a50c92244227b3e53e197621301d619d1ea01873c4', '48c8947f69c054a5caa934674ce8881d02bb18fb59d5a63eeaddff735b0e9'),
	(2, 'Gra', 'Duate', 'graduate', 'e289219c34f9a32ebc82393f09719b7f34872de95463242b5ffe8bb4b11a5fe7d454f9f5d082c8207c5d69b220ba06624b4bb15ffa05cc7d7d53c43f9e96da6a', '801e87294783281ae49fc8287a0fd86779b27d7972d3e84f0fa0d826d7cb67dfefc');

-- Bathroom-Review-User
CREATE TABLE IF NOT EXISTS `bathroom_review_user` (
  `bru_bth_id` int(11) unsigned NOT NULL,
  `bru_rvw_id` int(11) unsigned NOT NULL,
  `bru_usr_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`bru_bth_id`,`bru_rvw_id`, `bru_usr_id`),
  KEY `FK_BRU_RVW` (`bru_rvw_id`),
  CONSTRAINT `FK_BRU_BTH` FOREIGN KEY (`bru_bth_id`) REFERENCES `bathroom` (`bth_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_BRU_RVW` FOREIGN KEY (`bru_rvw_id`) REFERENCES `review` (`rvw_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_BRU_USR` FOREIGN KEY (`bru_usr_id`) REFERENCES `user` (`usr_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DELETE FROM `bathroom_review_user`;
INSERT INTO `bathroom_review_user` (`bru_bth_id`, `bru_rvw_id`, `bru_usr_id`) VALUES
    (1, 1, 1),
    (2, 2, 1),
    (1, 3, 1),
    (1, 4, 1),
    (3, 5, 2),
    (4, 6, 2);

CREATE TABLE IF NOT EXISTS `favorites` (
  `favorite_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `usr_id` int(11) unsigned NOT NULL,
  `bth_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`favorite_id`),
  FOREIGN KEY (`usr_id`) REFERENCES `user` (`usr_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  FOREIGN KEY (`bth_id`) REFERENCES `bathroom` (`bth_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
