USE LDT;


DROP TABLE IF EXISTS user;


CREATE TABLE user(
    userID INT AUTO_INCREMENT,
    userName VARCHAR(30) NOT NULL,
    userEmail VARCHAR(30) NOT NULL,
    userUid VARCHAR(30) NOT NULL,
    userPwd VARCHAR(100) NOT NULL,
    PRIMARY KEY(userID)
);
